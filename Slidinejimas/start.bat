git -C ../ pull && dotnet publish -o bin/Release/PublishOutput && dotnet ef database update && start cmd.exe @cmd /k dotnet bin/Release/PublishOutput/visitors.dll && npm install && npm start