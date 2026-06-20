$port = 8000
$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add("http://localhost:$port/")
try {
    $listener.Start()
    Write-Output "Server started on http://localhost:$port/"
} catch {
    Write-Output "Failed to start listener: $_"
    exit 1
}

$workspace = "c:\Users\user\Desktop\shoes-web"

while ($listener.IsListening) {
    try {
        $context = $listener.GetContext()
        $request = $context.Request
        $response = $context.Response
        
        $url = $request.Url.LocalPath
        if ($url -eq "" -or $url -eq "/") {
            $url = "/index.html"
        }
        
        # URL Decode (e.g. for traditional Chinese path names if any)
        $url = [System.Web.HttpUtility]::UrlDecode($url)
        
        $filePath = Join-Path $workspace $url
        
        if (Test-Path $filePath -PathType Leaf) {
            $bytes = [System.IO.File]::ReadAllBytes($filePath)
            $extension = [System.IO.Path]::GetExtension($filePath).ToLower()
            
            $contentType = "text/html; charset=utf-8"
            if ($extension -eq ".css") {
                $contentType = "text/css"
            } elseif ($extension -eq ".js") {
                $contentType = "application/javascript; charset=utf-8"
            } elseif ($extension -eq ".png") {
                $contentType = "image/png"
            } elseif ($extension -eq ".svg") {
                $contentType = "image/svg+xml; charset=utf-8"
            } elseif ($extension -eq ".jpg" -or $extension -eq ".jpeg") {
                $contentType = "image/jpeg"
            }
            
            $response.ContentType = $contentType
            $response.ContentLength64 = $bytes.Length
            $response.OutputStream.Write($bytes, 0, $bytes.Length)
        } else {
            $response.StatusCode = 404
            $errorMsg = [System.Text.Encoding]::UTF8.GetBytes("<h1>404 Not Found</h1><p>File not found: $url</p>")
            $response.ContentType = "text/html; charset=utf-8"
            $response.ContentLength64 = $errorMsg.Length
            $response.OutputStream.Write($errorMsg, 0, $errorMsg.Length)
        }
        $response.OutputStream.Close()
    } catch {
        # Silent ignore context close errors on browser cancellation
    }
}
$listener.Close()
