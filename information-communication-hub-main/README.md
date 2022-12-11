#### 1. To make this work .NET 5.0 needs to be installed

#### 2. Also before launching you need to create a database on your PC (search for instructions in README.md file on the database_dev branch)

#### 3. In the file 'appsettings.Development.json' you need to update connection string to have the name of your SQL Server. 

{

  "DetailedErrors": true,  
  "Logging": {

    "LogLevel": {
      "Default": "Information",
      "Microsoft": "Warning",
      "Microsoft.Hosting.Lifetime": "Information"
    }
  },
  
  "ConnectionStrings": 
  {
      "LocalDbConnection": "**Server=DESKTOP-O3LE2J4**;Database=InformationCommunicationHubDatabase;Password=;Trusted_Connection=True;MultipleActiveResultSets=true"

  }
}

#### 4. In the file 'Models/HubContext.cs' in the OnConfiguring method you need to update connection string to have the name of your SQL Server.


#### 5. If you want to launch the server app in Swagger you need to update the Startap.cs file, public void Configure(IApplicationBuilder app, IWebHostEnvironment env) method according to the comments in there. Example of the fragment of launchSettings.json file:

`
"InformationCommunicationHub": {
      "commandName": "Project",
      "dotnetRunMessages": "true",
      "launchBrowser": true,
      "launchUrl": "swagger",
      "applicationUrl": "https://localhost:5001;http://localhost:5000",
      "environmentVariables": {
        "ASPNETCORE_ENVIRONMENT": "Development",
        "ASPNETCORE_HOSTINGSTARTUPASSEMBLIES": "Microsoft.AspNetCore.Mvc.Razor.RuntimeCompilation"
      }
    }
`
