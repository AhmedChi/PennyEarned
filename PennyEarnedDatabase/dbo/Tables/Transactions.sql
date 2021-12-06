CREATE TABLE [dbo].[Transactions] (
    [TransactionId]     INT      IDENTITY (1, 1) NOT NULL,
    [GoalId]            INT      NULL,
    [TransactionAmount] INT      NULL,
    [CreatedAt]         DATETIME NULL,
    PRIMARY KEY CLUSTERED ([TransactionId] ASC),
    FOREIGN KEY ([GoalId]) REFERENCES [dbo].[Goals] ([GoalId])
);

