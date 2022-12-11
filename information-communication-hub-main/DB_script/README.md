#### 1.  Open create-database-script.sql in SQLServerManagementStudio
#### 2. Update the following lines to contain a proper file path:
`( NAME = N'InformationCommunicationHubDatabase', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.MSSQLSERVER\MSSQL\DATA\InformationCommunicationHubDatabase.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )`

`( NAME = N'InformationCommunicationHubDatabase_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.MSSQLSERVER\MSSQL\DATA\InformationCommunicationHubDatabase_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )`


#### 3. Click 'Execute'
#### 4. Open fill-tables-with-data-script.sql in SQLServerManagementStudio
#### 5. Click 'Execute'
#### 6. Enjoy beautiful database



