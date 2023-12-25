import React from 'react';
import ArticleCard from '../../../components/ArticleCard';
import { useSelector, useDispatch } from 'react-redux';
import { changeCount } from '../../../store/actions/countActions';

const Articles = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.count);
  const countChangeHandler = (type) => {
    dispatch(changeCount(type));
  };
  return (
    <section>
      <ArticleCard />
      <div>
        <button onClick={() => countChangeHandler('DECREASE')}>Decrease</button>
        {count.number}
        <button onClick={() => countChangeHandler('INCREASE')}>Increase</button>
      </div>
    </section>
  );
};

export default Articles;
