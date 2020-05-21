
DROP TABLE IF EXISTS dbo.Command;
CREATE TABLE dbo.Command
(
	commandId bigint IDENTITY(1,1) NOT NULL,
	productName varchar (1000),
	commandDate date,
	commandDescription varchar(1000) NOT NULL
)

insert into dbo.Command values ('Super Mario Bros', '5-10-1989', 'Marion for my girlfriend')

select * from dbo.Command