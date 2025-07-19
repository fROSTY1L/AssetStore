import type { SearchProps } from 'antd/es/input';
import Search from 'antd/es/input/Search';

const SearchInput = () => {
    const onSearch: SearchProps['onSearch'] = (value, _e, info) => console.log(info?.source, value);

  return (
    <>
      <Search placeholder="input search text" onSearch={onSearch} />
    </>
  )
}

export default SearchInput
