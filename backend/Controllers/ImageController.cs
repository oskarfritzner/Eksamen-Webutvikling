using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using System.IO;
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

        // POST: api/uploadimage - Save an uploaded image
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

            string url = $"/images/{fileName}";
            return Ok(new { url });
        }
    }
}
