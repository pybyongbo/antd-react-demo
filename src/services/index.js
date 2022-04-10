import request from '../utils/http';
import qs from 'qs'
const prefix = '/api';
const preNewsfix = '/client';

const preCoursefix = '/course';



//测试接口方法 
export async function getArticleList(data) {
  const response = await request({
    url: `${prefix}/posts/page`,
    method: 'POST',
    data: qs.stringify(data),
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  });
  return response.data;
}

export async function getUserList(data) {
  const response = await request({
    url: `${prefix}/userlist/page`,
    method: 'POST',
    data,
  });
  return response.data;
}

export async function getNewsList(params) {
  const response = await request({
    url: `${preNewsfix}/ajaxpage/ajax_page_click/data.php`,
    method: 'GET',
    params
  });
  return response.data;
}


export async function getCourseField(){
  const response = await request({
    url: `${preCoursefix}/course/get_course_fields`,
    method: 'GET',
  });
  return response.data;
}

export async function getCourseFieldList(curField){
  const response = await request({
    url: `${preCoursefix}/course/get_courses/all?field=${curField}`,
    method: 'GET',
  });
  return response.data;
}

export async function getCourseFieldListByKeyWords(keywords){
  const response = await request({
    url: `${preCoursefix}/course/get_courses_list?keywords=${keywords}`,
    method: 'GET',
  });
  return response.data;
}