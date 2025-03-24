# F1 Stats Backend

## ��️ Backend Overview

The backend of the F1 Stats application is built with ASP.NET Core Web API, providing a robust and type-safe API for Formula 1 data management. It features a clean architecture, comprehensive Swagger documentation, and modern C# development practices.

## 🛠️ Technology Stack

- **.NET 7**: Modern, cross-platform framework
- **C#**: Type-safe programming language
- **ASP.NET Core Web API**: Web API framework
- **Entity Framework Core**: ORM for SQLite
- **SQLite**: Lightweight, file-based database
- **Swagger/OpenAPI**: API documentation and testing
- **xUnit**: Testing framework
- **Docker**: Containerization support

## 📁 Project Structure

```
backend/
├── Controllers/           # API controllers
├── Models/               # Domain models and DTOs
├── Data/                 # DbContext and migrations
├── Services/             # Business logic
├── Configurations/       # App configuration
├── Middleware/           # Custom middleware
├── Extensions/           # Extension methods
├── Tests/                # Test projects
└── Properties/           # Launch settings
```

## 🎯 Features

- RESTful API endpoints with Swagger documentation
- Entity Framework Core with SQLite
- Dependency Injection
- Middleware pipeline
- Global error handling
- Model validation
- Logging system
- CORS configuration

## 🚀 Getting Started

### Prerequisites

- .NET SDK 7.0 or higher
- Visual Studio 2022 or VS Code

### Development Setup

1. Restore dependencies:

```bash
dotnet restore
```

2. Update database:

```bash
dotnet ef database update
```

3. Start the API:

```bash
dotnet run
```

4. Access Swagger UI:

```
https://localhost:5001/swagger
```

## 📡 API Endpoints

### F1 Data

```csharp
// Races
GET     /api/races            // Get all races
GET     /api/races/{id}       // Get race by id
POST    /api/races            // Create new race
PUT     /api/races/{id}       // Update race
DELETE  /api/races/{id}       // Delete race

// Drivers
GET     /api/drivers          // Get all drivers
GET     /api/drivers/{id}     // Get driver by id
POST    /api/drivers          // Create new driver
PUT     /api/drivers/{id}     // Update driver
DELETE  /api/drivers/{id}     // Delete driver

// Teams
GET     /api/teams            // Get all teams
GET     /api/teams/{id}       // Get team by id
POST    /api/teams            // Create new team
PUT     /api/teams/{id}       // Update team
DELETE  /api/teams/{id}       // Delete team
```

## 📊 Data Models

```csharp
public class Driver
{
    public int Id { get; set; }
    public string Name { get; set; }
    public string Team { get; set; }
    public int Points { get; set; }
    public string Nationality { get; set; }
    public DateTime CreatedAt { get; set; }
    public DateTime UpdatedAt { get; set; }
}

// Additional models...
```

## 🧪 Testing Strategy

- Unit tests with xUnit
- Integration tests
- Controller tests
- Service layer tests
- Repository tests
- In-memory database tests

## 📝 Code Quality

- C# coding conventions
- .editorconfig for consistency
- XML documentation
- Code analyzers
- StyleCop rules
- Clean architecture principles

## 🔒 Security

- HTTPS enforcement
- CORS policies
- Model validation
- Exception handling
- Secure configuration
- Input sanitization

## 📈 Performance

- Async/await patterns
- Efficient querying
- Response caching
- Database indexing
- Connection pooling

## 📚 Documentation

- Swagger UI documentation
- XML API documentation
- Code documentation
- Database schema
- Setup instructions

## 🔧 Development Tools

- Visual Studio 2022 or VS Code
- SQL Browser for SQLite
- Postman/Insomnia
- Docker Desktop
- Git

## 👥 Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## 📝 Development Notes

- Follow C# coding conventions
- Use async/await where appropriate
- Document public APIs
- Write comprehensive tests
- Keep controllers thin, logic in services
