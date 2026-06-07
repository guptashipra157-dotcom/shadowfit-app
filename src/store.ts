const P='sf_';
export function ld<T>(k:string,f:T):T{try{const r=localStorage.getItem(P+k);return r?JSON.parse(r):f}catch{return f}}
export function sv(k:string,d:unknown){try{localStorage.setItem(P+k,JSON.stringify(d))}catch{}}
export function uid(){return Date.now().toString(36)+Math.random().toString(36).slice(2,6)}
export function td(){return new Date().toISOString().slice(0,10)}
export type Rank='E'|'D'|'C'|'B'|'A'|'S'|'SS'|'SSS';
export const getRank=(l:number):Rank=>l>=100?'SSS':l>=80?'SS':l>=60?'S':l>=45?'A':l>=30?'B':l>=18?'C':l>=8?'D':'E';
export const getTitle=(r:Rank)=>({E:'Awakened Novice',D:'Shadow Initiate',C:'Dungeon Walker',B:'Gate Breaker',A:'Elite Hunter',S:'Shadow Monarch',SS:'Sovereign',SSS:'Absolute Being'})[r];
export const RC:Record<string,string>={E:'#6B7280',D:'#3B82F6',C:'#10B981',B:'#8B5CF6',A:'#F59E0B',S:'#EF4444',SS:'#F97316',SSS:'#00E5FF'};
export interface Prof{name:string;rank:Rank;level:number;xp:number;xpN:number;totalXp:number;pwr:number;title:string;joinDate:string;streak:number;lastActive:string;cls:number;board:string;stream:string}
export interface Stats{STR:number;AGI:number;END:number;INT:number;DIS:number;FOC:number;KNW:number;CON:number}
export interface Quest{id:string;title:string;mod:string;target:number;current:number;xp:number;done:boolean;date:string}
export interface Ach{id:string;title:string;desc:string;icon:string;tier:string;cat:string;earned:boolean}
export interface Workout{id:string;name:string;type:string;dur:number;cal:number;exs:{name:string;sets:number;reps:number;wt:number}[];date:string;xp:number}
export interface StudySes{id:string;sub:string;dur:number;type:string;date:string;xp:number}
export interface CodingSes{id:string;proj:string;lang:string;dur:number;date:string;xp:number}
export interface Tx{id:string;type:'in'|'out';cat:string;amt:number;desc:string;date:string}
export interface Goal{id:string;name:string;tgt:number;cur:number;cat:string}
export interface Habit{id:string;name:string;icon:string;dates:string[];streak:number;xpPer:number}
export interface Task{id:string;title:string;pri:'low'|'med'|'high'|'urgent';done:boolean;due:string;mod:string}
export interface Note{id:string;title:string;body:string;sub:string;date:string}
export interface FC{id:string;front:string;back:string;sub:string;next:string;iv:number;ease:number}
export interface QR{id:string;sub:string;ch:string;sc:number;tot:number;date:string;mode:string;xp:number;diff:string}
export interface DL{date:string;xp:number;wMin:number;sMin:number;cMin:number;tasks:number;habits:number}
export interface WtEntry{id:string;kg:number;date:string}
export interface WaterEntry{date:string;ml:number}
export const defProf:Prof={name:'Shadow Hunter',rank:'E',level:1,xp:0,xpN:500,totalXp:0,pwr:100,title:'Awakened Novice',joinDate:td(),streak:0,lastActive:td(),cls:12,board:'CBSE',stream:'Science'};
export const defStats:Stats={STR:10,AGI:10,END:10,INT:10,DIS:10,FOC:10,KNW:10,CON:10};
export const defDL=():DL=>({date:td(),xp:0,wMin:0,sMin:0,cMin:0,tasks:0,habits:0});

// ═══ COLLEGE / UNIVERSITY ═══
export type EduLevel='school'|'diploma'|'college'|'university'|'competitive'|'professional'|'self';
export interface EduProfile{level:EduLevel;country:string;board:string;institution:string;program:string;semester:number;year:number}
export interface Semester{id:string;name:string;year:number;sem:number;subjects:SemSubject[];gpa:number}
export interface SemSubject{id:string;name:string;credits:number;grade:string;attendance:number;intMarks:number;intMax:number;practMarks:number;practMax:number;assignments:{id:string;title:string;done:boolean;due:string;score:number;max:number}[];projects:{id:string;title:string;status:'pending'|'progress'|'done';desc:string}[]}
export interface Internship{id:string;company:string;role:string;start:string;end:string;status:'active'|'done';stipend:number;desc:string;xp:number}
export interface Research{id:string;title:string;field:string;status:'idea'|'progress'|'review'|'published';desc:string;date:string}
export interface MediaItem{id:string;type:'image'|'video';name:string;date:string;notes:string;tags:string[];analysis:string;timestamps?:{time:string;note:string}[]}
export const defEdu:EduProfile={level:'school',country:'India',board:'CBSE',institution:'',program:'',semester:1,year:1};
export const gradePoints:Record<string,number>={O:10,'A+':9,A:8,'B+':7,B:6,C:5,D:4,F:0,'':0};
export function calcGPA(subs:SemSubject[]):number{
  const totalCredits=subs.reduce((a,b)=>a+b.credits,0);
  if(!totalCredits)return 0;
  const weightedSum=subs.reduce((a,b)=>a+b.credits*(gradePoints[b.grade]||0),0);
  return parseFloat((weightedSum/totalCredits).toFixed(2));
}
