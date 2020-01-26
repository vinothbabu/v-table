import faker from 'faker'
import {timer} from 'rxjs'
import {mapTo} from 'rxjs/operators'


const count = 9;
const data = [];
for (let i = 0; i < count; i++) {
  data.push({
    id: faker.random.number(),
    account: faker.name.findName(),
    change: faker.commerce.price()
  });
  
}

export function getAccountData(params = {page : 1}){
  const perPage = 3;
  const offset = (params.page - 1) * perPage;
  const paginatedItems = data.slice(offset, offset + perPage);
  const hasMore = offset + perPage < data.length;
  return {
    currentPage: params.page,
    hasMore,
    total: data.length,
    data: paginatedItems
  };
}

export const getAccountInfo = function(params?) {
  return timer(1000).pipe(mapTo(getAccountData(params)));
};