CREATE TABLE [dbo].[UserLogins] (
    [UserLoginId] INT           IDENTITY (1, 1) NOT NULL,
    [UserName]    VARCHAR (255) NOT NULL,
    [Password]    VARCHAR (255) NOT NULL,
    PRIMARY KEY CLUSTERED ([UserLoginId] ASC)
);

