import { useState, useCallback } from "react";
import { getModels } from "../api";
import ModelCard from "./ModelCard";
import { Input, Pagination, Space, Typography, type PaginationProps } from "antd";
import { useQuery } from "@tanstack/react-query";
import { LoadingOutlined } from "@ant-design/icons";
import type { SearchProps } from "antd/es/input";

const { Text } = Typography;
const { Search } = Input;

const ModelsList = () => {
  const [page, setPage] = useState<number>(1);
  const [search, setSearch] = useState<string>("");

  const onSearch: SearchProps['onSearch']= useCallback((value: string) => {
    setPage(1);
    setSearch(value);
  }, []);

  const {
    data: modelsData,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["models", page, search],
    queryFn: () => getModels({page, search}),
  });

  if (isLoading && !modelsData) {
    return <LoadingOutlined style={{ fontSize: 32 }}/>;
  }

  if (isError) {
    return <Text type="danger">Error: {error.message}</Text>;
  }

  const onChange: PaginationProps['onChange'] = (page) => {
    setPage(page);
  };

  return (
    <>
      <Space>
        <Search 
          placeholder="Search models..." 
          onSearch={onSearch}
          key="search-input"
        />
      </Space>
      
      {modelsData?.models.map((model) => 
        <ModelCard {...model} key={model.id}/>
      )}
      
      <Pagination 
        current={page}
        total={modelsData?.pages ? modelsData.pages * 10 : 10} 
        onChange={onChange}
        align="end"
      />
      
      {isLoading && modelsData && (
        <div>Loading more models...</div>
      )}
    </>
  );
};

export default ModelsList;