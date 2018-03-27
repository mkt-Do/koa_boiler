import rootService from '../services/root';

const root = async (ctx, next) => {
  ctx.body = await rootService.root;
};

export default root;

