import request from '../utils/http';
import qs from 'qs'
const prefix = '/api';
const preNewsfix = '/client';


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
