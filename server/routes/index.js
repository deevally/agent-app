import express from 'express';
import ownerRoutes from './owner';
import agentRoute from './agent';
const app = express();

app.use('/', ownerRoutes);
app.use('/', agentRoute);
export default app;
