
DROP TABLE IF EXISTS dbo.Command;
CREATE TABLE dbo.Command
(
	commandId bigint IDENTITY(1,1) NOT NULL,
	productName varchar (1000),
	commandDate date,
	commandDescription varchar(1000) NOT NULL
)

select * from dbo.Command