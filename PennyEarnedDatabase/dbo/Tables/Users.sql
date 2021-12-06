CREATE TABLE [dbo].[Users] (
    [UserId]      INT           IDENTITY (1, 1) NOT NULL,
    [UserLoginId] INT           NULL,
    [FirstName]   VARCHAR (255) NULL,
    [LastName]    VARCHAR (255) NULL,
    PRIMARY KEY CLUSTERED ([UserId] ASC),
    FOREIGN KEY ([UserLoginId]) REFERENCES [dbo].[UserLogins] ([UserLoginId])
);

