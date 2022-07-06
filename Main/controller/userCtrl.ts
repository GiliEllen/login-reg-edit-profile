import express from 'express';

export async function getUser (req: express.Request, res: express.Response) {
    try {
        const userId = req.query;
        if (!userId) throw new Error("Couldn't get userId from query");
        console.log(userId);
    } catch (error) {
        res.send({ error: error.message });
    }
} 