# Usar una imagen base de .NET SDK para construir la aplicación
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build-env

# Establecer el directorio de trabajo
WORKDIR /src

# Copiar el archivo de proyecto y restaurar las dependencias
COPY PeliculaAPI.csproj ./
RUN dotnet restore

# Copiar el resto del código fuente
COPY . ./

# Construir la aplicación
RUN dotnet build -c Release -o /app/build

# Publicar la aplicación
RUN dotnet publish -c Release -o /app/publish

# Usar una imagen base de .NET Runtime para ejecutar la aplicación
FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS runtime

# Establecer el directorio de trabajo
WORKDIR /app

# Copiar la aplicación publicada desde el contenedor de construcción
COPY --from=build-env /app/publish .

# Exponer los puertos que la aplicación escuchará
EXPOSE 80
EXPOSE 443

# Establecer el comando de entrada para el contenedor
ENTRYPOINT ["dotnet", "PeliculaAPI.dll"]
