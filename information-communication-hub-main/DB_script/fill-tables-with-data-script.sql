USE InformationCommunicationHubDatabase;

INSERT INTO AssistanceType (assistance_type)
VALUES ('Legal Assistance'), 
	   ('Medical Assistance'), 
	   ('Employment Assistance'), 
	   ('Social Assistance');

INSERT INTO UserType (user_type)
VALUES ('Admin'), 
	   ('Organisation'), 
	   ('Refugee');

INSERT INTO AdminUser (user_type, name_surname, password)
VALUES (1, 'Pavlo Vyshnyvetski',  'pavloAdmin'),
	   (1, 'Anastasiia Grinchenko', 'anastasiiaAdmin');

INSERT INTO Refugee (user_type, name_surname, city, password)
VALUES (3, 'Tetiana Gorodna', 'Dnipro', 'tetiana'),
       (3, 'Vasyl Gordienko', 'Kharkiv', 'vasyl'),
	   (3, 'Maria Vyshnyvetska', 'Kyiv', 'maria'),
	   (3, 'Oleksandr Hirnyii', 'Rivne', 'oleksandr'),
	   (3, 'Julia Panchuk', 'Lviv', 'julia');

INSERT INTO Request (user_id, assistance_id, do_enable_assistance_module, creation_date, update_date, status)
VALUES (1, 1, 1, GETDATE(), GETDATE(), 'PENDING'),
	   (2, 1, 0, GETDATE(), GETDATE(), 'PENDING'),
	   (3, 1, 1, GETDATE(), GETDATE(), 'PENDING');

SELECT * FROM AssistanceType;
SELECT * FROM UserType;
SELECT * FROM AdminUser;
SELECT * FROM Refugee;
SELECT * FROM Request;


