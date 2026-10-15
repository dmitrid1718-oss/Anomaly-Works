import {readRoom,publicState} from '../../lib/room.js';
export default async function handler(req,res){res.setHeader('Cache-Control','no-store');if(req.method!=='GET')return res.status(405).json({error:'method_not_allowed'});try{const {state}=await readRoom();return res.status(200).json(publicState(state));}catch{return res.status(503).json({error:'room_storage_unavailable'});}}
