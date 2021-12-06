CREATE TABLE [dbo].[Goals] (
    [GoalId]           INT           IDENTITY (1, 1) NOT NULL,
    [Title]            VARCHAR (255) NULL,
    [Description]      VARCHAR (255) NULL,
    [UserLoginId]      INT           NULL,
    [AmountTowardGoal] INT           NULL,
    [GoalAmount]       INT           NULL,
    [IsCompleted]      BIT           NULL,
    [CreatedAt]        DATETIME      NULL,
    PRIMARY KEY CLUSTERED ([GoalId] ASC),
    FOREIGN KEY ([UserLoginId]) REFERENCES [dbo].[UserLogins] ([UserLoginId])
);

