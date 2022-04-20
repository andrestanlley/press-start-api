BEGIN TRY

BEGIN TRAN;

-- CreateTable
CREATE TABLE [dbo].[User] (
    [id] INT NOT NULL IDENTITY(1,1),
    [name] NVARCHAR(1000) NOT NULL,
    [surname] NVARCHAR(1000) NOT NULL,
    [email] NVARCHAR(1000),
    [cellphone] NVARCHAR(1000) NOT NULL,
    [birthDate] DATETIME2 NOT NULL,
    [autenticationId] INT NOT NULL,
    CONSTRAINT [User_pkey] PRIMARY KEY ([id]),
    CONSTRAINT [User_email_key] UNIQUE ([email])
);

-- CreateTable
CREATE TABLE [dbo].[Autentication] (
    [id] INT NOT NULL IDENTITY(1,1),
    [password] NVARCHAR(1000) NOT NULL,
    [status] BIT NOT NULL,
    CONSTRAINT [Autentication_pkey] PRIMARY KEY ([id])
);

-- AddForeignKey
ALTER TABLE [dbo].[User] ADD CONSTRAINT [User_autenticationId_fkey] FOREIGN KEY ([autenticationId]) REFERENCES [dbo].[Autentication]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
