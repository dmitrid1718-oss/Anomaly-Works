// Read-only public state endpoint. No simulated participants.
export default async function handler(req,res){
 res.setHeader('Cache-Control','no-store');
 if(req.method!=='GET')return res.status(405).json({error:'method_not_allowed'});
 return res.status(200).json({room:'001',mode:'awaiting_connection',participants:{a:{connected:false},g:{connected:false}},messages:[],note:'No persistent room controller or API participant credentials configured yet.'});
}
