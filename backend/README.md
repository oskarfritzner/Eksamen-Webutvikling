# F1 Stats Backend

## 🖥️ Backend Overview

The backend of the F1 Stats application is built with ASP.NET Core Web API, providing data for the Formula 1 statistics frontend. It uses SQLite for data storage and Swagger for API documentation.

## 🛠️ Technology Stack

- **.NET**: Framework for building the API
- **C#**: Programming language
- **ASP.NET Core Web API**: Web API framework
- **Entity Framework Core**: ORM for SQLite
- **SQLite**: Database
- **Swagger**: API documentation

## 📁 Project Structure

```
backend/
├── Controllers/           # API controllers
├── Models/               # Data models
├── Data/                 # DbContext and database configuration
├── Properties/           # Launch settings
└── appsettings.json     # Application configuration
```

## 📊 Data Models

```csharp
public class Driver
{
    public int Id { get; set; }
    public string Name { get; set; }
    public string Team { get; set; }
    public string Nationality { get; set; }
    public int Points { get; set; }
}

public class Team
{
    public int Id { get; set; }
    public string Name { get; set; }
    public string Base { get; set; }
    public int Points { get; set; }
}

public class Race
{
    public int Id { get; set; }
    public string Name { get; set; }
    public string Circuit { get; set; }
    public DateTime Date { get; set; }
    public string Location { get; set; }
}
```

## 📡 Current API Endpoints

```csharp
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

// Races
GET     /api/races            // Get all races
GET     /api/races/{id}       // Get race by id
POST    /api/races            // Create new race
PUT     /api/races/{id}       // Update race
DELETE  /api/races/{id}       // Delete race
```

## 🚀 Getting Started

### Prerequisites

- .NET SDK
- Visual Studio or VS Code

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

## 🔍 Current Implementation

- Basic CRUD operations for F1 data
- Entity Framework Core with SQLite
- Swagger API documentation
- Model validation
- Basic error handling
- CORS configuration

## 🎯 Future Improvements

### API Enhancements

- [ ] Add authentication and authorization
- [ ] Implement comprehensive error handling
- [ ] Add request/response logging
- [ ] Implement caching
- [ ] Add rate limiting
- [ ] Expand F1 statistics endpoints

### Data Model Enhancements

- [ ] Add race results tracking
- [ ] Implement championship standings
- [ ] Add qualifying data
- [ ] Track historical statistics
- [ ] Add driver/team relationships
- [ ] Include more detailed race information

### Development Improvements

- [ ] Add unit tests
- [ ] Implement integration tests
- [ ] Set up CI/CD pipeline
- [ ] Add performance monitoring
- [ ] Improve error logging
- [ ] Add database migrations

## 📝 Development Notes

- Follow C# coding conventions
- Use meaningful variable names
- Keep controllers focused on routing
- Implement service layer for business logic
- Document API changes
- Regular database backups
