using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Hosting; // Required for IWebHostEnvironment
using Microsoft.AspNetCore.Http; // Required for IFormFile
using System.IO; // Required for Path and FileStream
using System;

namespace backend.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UploadImageController : ControllerBase
    {
        private readonly IWebHostEnvironment hosting;

        public UploadImageController(IWebHostEnvironment _hosting)
        {
            hosting = _hosting;
        }

        [HttpPost]
        public IActionResult SaveImage(IFormFile file)
        {
            if (file == null || file.Length == 0)
            {
                return BadRequest("No file provided.");
            }

            string wwwrootPath = hosting.WebRootPath;
            string fileName = Path.GetFileNameWithoutExtension(file.FileName);
            string extension = Path.GetExtension(file.FileName);
            fileName = $"{fileName}_{DateTime.Now:yyyyMMddHHmmss}{extension}";
            string filePath = Path.Combine(wwwrootPath, "images", fileName);

            try
            {
                if (!Directory.Exists(Path.Combine(wwwrootPath, "images")))
                {
                    Directory.CreateDirectory(Path.Combine(wwwrootPath, "images"));
                }

                using (var fileStream = new FileStream(filePath, FileMode.Create))
                {
                    file.CopyTo(fileStream);
                }
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, $"Internal server error: {ex}");
            }

            // Assuming you're hosting the site at the root, the URL will be relative from the wwwroot.
            // You might need to adjust the URL depending on your hosting configuration.
            string url = $"/images/{fileName}";

            return Ok(new { url });
        }
    }
}
