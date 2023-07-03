import { useId } from 'react';
import '../styles/Filters.css';
import { useFilters } from '../hooks/useFilters';

export function Filters() {
  const minPriceId = useId();
  const categoryFilterId = useId();
  const { filters, setfilters } = useFilters();

  const changeRangeValue = (e) => {
    setfilters((previouState) => ({
      ...previouState,
      minPrice: e.target.value,
    }));
  };

  const changeCategoryValue = (e) => {
    setfilters((previouState) => ({
      ...previouState,
      category: e.target.value,
    }));
  };

  return (
    <>
      <section className='filters'>
        <div>
          <label htmlFor={minPriceId}>Min Price</label>
          <input
            type='range'
            id={minPriceId}
            min={0}
            max={1000}
            onChange={changeRangeValue}
            value={filters.minPrice}
          />
          <span>${filters.minPrice}</span>
        </div>
        <div>
          <label htmlFor={categoryFilterId}>Category</label>
          <select
            id={categoryFilterId}
            onChange={changeCategoryValue}
            name='category'
          >
            <option value='all'>All</option>
            <option value='laptops'>Laptops</option>
            <option value='smartphones'>SmartPhones</option>
          </select>
        </div>
      </section>
    </>
  );
}
