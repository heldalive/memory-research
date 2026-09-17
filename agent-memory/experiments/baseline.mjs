import {writeFile,mkdir} from 'node:fs/promises';
import {fileURLToPath} from 'node:url';
import path from 'node:path';
// Mechanical data-structure baseline: no language understanding, embeddings or model calls.
export function episode(seed){
 let s=seed>>>0;const random=()=>{s=(Math.imul(s,1664525)+1013904223)>>>0;return s;};
 const events=[],truth=new Map();
 for(let t=0;t<60;t++){const key=`entity-${random()%17}`;const op=t%11===0?'delete':'set';const value=`value-${random()%997}`;events.push({t,key,op,value});if(op==='delete')truth.delete(key);else truth.set(key,value);}
 const queries=Array.from({length:18},(_,i)=>`entity-${i}`);
 return {events,queries,truth};
}
export function recall(events,key,policy){
 if(policy==='none')return 'unknown';
 const chosen=policy==='recent-8'?events.slice(-8):events;
 if(policy==='first-match'){const hit=chosen.find(e=>e.key===key);return hit&&hit.op==='set'?hit.value:'unknown';}
 const hit=chosen.findLast(e=>e.key===key);return hit&&hit.op==='set'?hit.value:'unknown';
}
export function evaluate(){
 const policies=['none','recent-8','first-match','versioned-ledger'];
 const results=Object.fromEntries(policies.map(p=>[p,{correct:0,total:0,episodes:200}]));const episodes=[];
 for(let seed=1001;seed<=1200;seed++){const {events,queries,truth}=episode(seed);const scores={};for(const policy of policies){let correct=0;for(const q of queries){const expected=truth.get(q)||'unknown';correct+=Number(recall(events,q,policy)===expected);}results[policy].correct+=correct;results[policy].total+=queries.length;scores[policy]=correct/queries.length;}episodes.push({seed,scores});}
 return {kind:'deterministic-storage-semantics',warning:'NOT an LLM evaluation. Perfect ledger behavior follows from explicit structured events and is not evidence of extraction or reasoning skill.',seeds:[1001,1200],questionsPerEpisode:18,results,episodes};
}
if(process.argv[1]&&path.resolve(process.argv[1])===fileURLToPath(import.meta.url)){const dir=path.dirname(fileURLToPath(import.meta.url));await mkdir(dir,{recursive:true});const out=evaluate();await writeFile(path.join(dir,'baseline-results.json'),JSON.stringify(out,null,2)+'\n');console.log(JSON.stringify({kind:out.kind,results:out.results,warning:out.warning},null,2));}
