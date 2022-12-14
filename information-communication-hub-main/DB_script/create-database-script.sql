USE [master]
GO
/****** Object:  Database [InformationCommunicationHubDatabase]    Script Date: 08.11.2022 20:44:38 ******/
CREATE DATABASE [InformationCommunicationHubDatabase]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'InformationCommunicationHubDatabase', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.MSSQLSERVER\MSSQL\DATA\InformationCommunicationHubDatabase.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'InformationCommunicationHubDatabase_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.MSSQLSERVER\MSSQL\DATA\InformationCommunicationHubDatabase_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
 WITH CATALOG_COLLATION = DATABASE_DEFAULT
GO
ALTER DATABASE [InformationCommunicationHubDatabase] SET COMPATIBILITY_LEVEL = 150
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [InformationCommunicationHubDatabase].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [InformationCommunicationHubDatabase] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [InformationCommunicationHubDatabase] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [InformationCommunicationHubDatabase] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [InformationCommunicationHubDatabase] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [InformationCommunicationHubDatabase] SET ARITHABORT OFF 
GO
ALTER DATABASE [InformationCommunicationHubDatabase] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [InformationCommunicationHubDatabase] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [InformationCommunicationHubDatabase] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [InformationCommunicationHubDatabase] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [InformationCommunicationHubDatabase] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [InformationCommunicationHubDatabase] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [InformationCommunicationHubDatabase] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [InformationCommunicationHubDatabase] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [InformationCommunicationHubDatabase] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [InformationCommunicationHubDatabase] SET  DISABLE_BROKER 
GO
ALTER DATABASE [InformationCommunicationHubDatabase] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [InformationCommunicationHubDatabase] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [InformationCommunicationHubDatabase] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [InformationCommunicationHubDatabase] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [InformationCommunicationHubDatabase] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [InformationCommunicationHubDatabase] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [InformationCommunicationHubDatabase] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [InformationCommunicationHubDatabase] SET RECOVERY FULL 
GO
ALTER DATABASE [InformationCommunicationHubDatabase] SET  MULTI_USER 
GO
ALTER DATABASE [InformationCommunicationHubDatabase] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [InformationCommunicationHubDatabase] SET DB_CHAINING OFF 
GO
ALTER DATABASE [InformationCommunicationHubDatabase] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [InformationCommunicationHubDatabase] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [InformationCommunicationHubDatabase] SET DELAYED_DURABILITY = DISABLED 
GO
ALTER DATABASE [InformationCommunicationHubDatabase] SET ACCELERATED_DATABASE_RECOVERY = OFF  
GO
EXEC sys.sp_db_vardecimal_storage_format N'InformationCommunicationHubDatabase', N'ON'
GO
ALTER DATABASE [InformationCommunicationHubDatabase] SET QUERY_STORE = OFF
GO
USE [InformationCommunicationHubDatabase]
GO
/****** Object:  Table [dbo].[AdminUser]    Script Date: 08.11.2022 20:44:38 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[AdminUser](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[user_type] [int] NOT NULL,
	[name_surname] [varchar](100) NOT NULL,
	[password] [varchar](50) NOT NULL,
 CONSTRAINT [PK_AdminUser] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[AssistanceType]    Script Date: 08.11.2022 20:44:38 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[AssistanceType](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[assistance_type] [varchar](50) NOT NULL,
 CONSTRAINT [PK_AssistanceType] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Refugee]    Script Date: 08.11.2022 20:44:38 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Refugee](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[user_type] [int] NOT NULL,
	[name_surname] [varchar](100) NOT NULL,
	[password] [varchar](50) NOT NULL,
	[city] [varchar](50) NULL,
	[user_token] [varchar](1000) NULL,
 CONSTRAINT [PK_Refugee] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Request]    Script Date: 08.11.2022 20:44:38 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Request](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[user_id] [int] NOT NULL,
	[assistance_id] [int] NOT NULL,
	[do_enable_assistance_module] [bit] NOT NULL,
	[creation_date] [datetime] NULL,
	[update_date] [datetime] NULL,
	[status] [varchar](100) NULL,
	[comment] [varchar](500) NULL,
 CONSTRAINT [PK_Request] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[UserType]    Script Date: 08.11.2022 20:44:38 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[UserType](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[user_type] [varchar](50) NOT NULL,
 CONSTRAINT [PK_UserType] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[AdminUser]  WITH CHECK ADD  CONSTRAINT [FK_AdminUser_UserType] FOREIGN KEY([user_type])
REFERENCES [dbo].[UserType] ([id])
GO
ALTER TABLE [dbo].[AdminUser] CHECK CONSTRAINT [FK_AdminUser_UserType]
GO
ALTER TABLE [dbo].[Refugee]  WITH CHECK ADD  CONSTRAINT [FK_Refugee_UserType] FOREIGN KEY([user_type])
REFERENCES [dbo].[UserType] ([id])
GO
ALTER TABLE [dbo].[Refugee] CHECK CONSTRAINT [FK_Refugee_UserType]
GO
ALTER TABLE [dbo].[Request]  WITH CHECK ADD  CONSTRAINT [FK_Request_AssistanceType] FOREIGN KEY([assistance_id])
REFERENCES [dbo].[AssistanceType] ([id])
GO
ALTER TABLE [dbo].[Request] CHECK CONSTRAINT [FK_Request_AssistanceType]
GO
ALTER TABLE [dbo].[Request]  WITH CHECK ADD  CONSTRAINT [FK_Request_Refugee] FOREIGN KEY([user_id])
REFERENCES [dbo].[Refugee] ([id])
GO
ALTER TABLE [dbo].[Request] CHECK CONSTRAINT [FK_Request_Refugee]
GO
USE [master]
GO
ALTER DATABASE [InformationCommunicationHubDatabase] SET  READ_WRITE 
GO
