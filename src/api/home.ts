import service from "@/utils/request";
import axios from "axios";

export interface AllDataItem{
    file:File|Blob|void
    fileMd5:string
    sliceFileSize:number
    index:number
    fileSize:number
    fileName:string
    sliceNumber:number
    cancel?:Function|void
    finish?:boolean
}
export interface taskArrItem{
    id:number|string
    md5:string
    name:string
    state:number // 0是什么都不做，1文件处理，2是上传中，3是暂停，4是上传完成，5上传中断
    fileSize:number
    allData:Array<AllDataItem>
    whileRequest:Array<AllDataItem>
    finishNumber:number
    errNumber:number
    percentage:number
}
export interface CheckFileReq{
    md5:string|unknown
    size:number
}
export interface mergeSliceReq{
    folderPath:string
    fileMd5:string
    justMd5:string
    nameSuffix:string
    fileName:string
}

// 查看文件
export function checkFile(data:CheckFileReq){
    return service.post('/checkFile',data)
}

// 上传文件
export function update(data:FormData,getCancelToken:(cancel:Function)=>void){
    const CancelToken = axios.CancelToken
    return service.post('/update',data,{cancelToken:new CancelToken(getCancelToken)})
}

// 合并所有切片
export function mergeSlice(data:mergeSliceReq){
    return service.post('/mergeslice',data)
}

// 清空
export function clearDir(){
    return service.post('/clearDir')
}