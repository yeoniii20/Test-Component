import React, { useEffect, useRef, useState } from "react";
import { ReactTabulator } from "react-tabulator";
import { CellComponent, RowComponent } from "tabulator-tables";
import "react-tabulator/lib/styles.css";
import { wrap } from "module";

interface TableDataItem {
  id: number;
  server: string;
  group: string;
  value: string;
  category: string; // 카테고리 추가
  queue: string;
  topic: string;
}

const initialData: TableDataItem[] = [
  {
    id: 1,
    group: "Group1",
    server: "ems-01",
    value: "queue01",
    category: "group1",
    queue: "queue01",
    topic: "topic01",
  },
  {
    id: 2,
    group: "Group2",
    server: "ems-02",
    value: "queue01",
    category: "group1",
    queue: "queue01",
    topic: "topic01",
  },
  {
    id: 3,
    group: "Group3",
    server: "ems-03",
    value: "queue12",
    category: "group2",
    queue: "queue12",
    topic: "topic02",
  },
  {
    id: 4,
    group: "Group4",
    server: "ems-04",
    value: "queue05",
    category: "group2",
    queue: "queue05",
    topic: "topic07",
  },
  {
    id: 5,
    group: "Group5",
    server: "ems-05",
    value: "queue01",
    category: "group3",
    queue: "queue01",
    topic: "topic54",
  },
  {
    id: 6,
    group: "Group9",
    server: "ems-06",
    value: "queue34",
    category: "group3",
    queue: "queue34",
    topic: "topic11",
  },
  {
    id: 7,
    group: "test",
    server: "ems-07",
    value: "queue09",
    category: "test",
    queue: "queue09",
    topic: "topic09",
  },
  {
    id: 8,
    group: "test01",
    server: "ems-07",
    value: "queue09",
    category: "test01",
    queue: "queue09",
    topic: "topic09",
  },
  {
    id: 9,
    group: "tabulator",
    server: "ems-server01",
    value: "queue12",
    category: "tabulator",
    queue: "queue79",
    topic: "topic09-03",
  },
  {
    id: 10,
    group: "grid",
    server: "ems-server02",
    value: "queue23",
    category: "grid-test",
    queue: "queue09",
    topic: "topic09-01",
  },
];

const TopicGrid = () => {
  const tableRef = useRef<ReactTabulator | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedData, setSelectedData] = useState<TableDataItem[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([
    "All",
  ]);
  const [dropdownMenu, setDropdownMenu] = useState<boolean>(false);

  const selectedServerNames = selectedData.map((option) => option.queue);
  const selectedServerCount = selectedData.length;

  const columns = [
    {
      title: "",
      width: 20,
      formatter: "rowSelection",
      titleFormatter: "rowSelection",
      hozAlign: "center",
      headerSort: false,
      cssClass: "text-center",
      cellClick: function (cell: CellComponent) {
        const row = cell.getRow();
        row.toggleSelect();
      },
    },
    { title: "group", field: "group", hozAlign: "center" },
    { title: "server", field: "server", hozAlign: "center" },
    // { title: "queue", field: "queue", hozAlign: "center" },
    { title: "topic", field: "topic", hozAlign: "center" },
  ];

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const filteredData = searchTerm
    ? initialData.filter((item) =>
        item.queue.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : initialData;

  const filteredDataByCategory = selectedCategories.includes("All")
    ? filteredData
    : filteredData.filter((item) => selectedCategories.includes(item.category));

  const options = {
    layout: "fitColumns",
    printAsHtml: true,
    printVisibleRowsOnly: true,
    movableColumns: true,
  };

  const noDataOption = {
    layout: "fitColumns",
    placeholder: "검색된 데이터가 없습니다.",
  };

  const clearSearch = () => {
    setSearchTerm("");
    tableRef.current?.table.clearFilter();
  };

  const handleConfirm = () => {
    const selectedRows = tableRef.current?.table.getSelectedRows() || [];
    const selectedCount = selectedRows.length;

    if (selectedCount > 0) {
      const selectedItems = selectedRows.map((row: RowComponent) =>
        row.getData()
      );
      setSelectedData(selectedItems);
      const selectedServerNames = selectedItems.map(
        (item: TableDataItem) => item.queue
      );
      alert(
        `Queue ${selectedCount}건을 선택했습니다. 선택한 Queue: ${selectedServerNames.join(
          ", "
        )}`
      );
    } else {
      setSelectedData([]);
      alert("No servers selected");
    }

    setDropdownMenu(false);
  };

  const handleDropdownVisible = () => {
    setSearchTerm("");
    setDropdownMenu(!dropdownMenu);
  };

  const handleCancelClick = () => {
    setSelectedData([]);
    setDropdownMenu(false);
  };

  const handleSelectCategory = (category: string) => {
    if (category === "All") {
      setSelectedCategories(["All"]);
    } else {
      const updatedCategories = selectedCategories.includes("All")
        ? [category]
        : selectedCategories.includes(category)
        ? selectedCategories.filter((c) => c !== category)
        : [...selectedCategories, category];
      setSelectedCategories(updatedCategories);

      if (updatedCategories.length === 0) {
        setSelectedCategories(["All"]);
      } else if (updatedCategories.length === 7) {
        // 이 부분은 카테고리 수에 따라 달라짐! api 작업 시 변수로 받아올 예정
        setSelectedCategories(["All"]);
      } else {
        setSelectedCategories(updatedCategories);
      }
    }
  };

  const dropdownText =
    selectedServerCount > 0
      ? `${selectedServerNames[0]}외 ${selectedServerCount - 1}건`
      : "Server를 선택하세요";

  const selectedOptionName =
    selectedServerCount === 1 ? selectedData[0].queue : "";

  return (
    <div>
      {/* === 입력 창 === */}
      <div
        onClick={handleDropdownVisible}
        style={{
          display: "flex",
          alignItems: "center",
          backgroundColor: "lightGrey",
          width: 450,
          height: 30,
          cursor: "pointer",
          border: "1px solid grey",
          padding: 8,
        }}
      >
        {selectedServerCount === 1 ? selectedOptionName : dropdownText}
      </div>
      {/* === 드롭 다운 메뉴 === */}
      <div
        style={{
          backgroundColor: "#E5E5E5",
          width: 450,
        }}
      >
        {dropdownMenu === true ? (
          <div
            style={{
              width: 450,
              backgroundColor: "#E5E5E5",
              height: 100,
              whiteSpace: "pre-wrap",
              overflow: "scroll",
            }}
          >
            {/* === 카테고리 === */}
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                gap: 6,
                paddingTop: 5,
                paddingLeft: 5,
              }}
            >
              <button
                key="All"
                onClick={() => handleSelectCategory("All")}
                style={{
                  paddingLeft: 4,
                  paddingRight: 4,
                  backgroundColor: selectedCategories.includes("All")
                    ? "lightGrey"
                    : "white",
                  borderRadius: 10,
                  marginRight: 5,
                  color: "black",
                }}
              >
                All
              </button>
              {Array.from(
                new Set(initialData.map((item) => item.category))
              ).map((category) => (
                <button
                  key={category}
                  onClick={() => handleSelectCategory(category)}
                  style={{
                    backgroundColor: selectedCategories.includes(category)
                      ? "lightGrey"
                      : "white",
                    borderRadius: 10,
                    color: "black",
                    paddingLeft: 5,
                    paddingRight: 5,
                  }}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div></div>
        )}

        {/* === 검색 기능 === */}
        <div style={{ width: 450, backgroundColor: "#E5E5E5" }}>
          <div>
            <input
              style={{ color: "black", width: 380, height: 30 }}
              type="text"
              placeholder="Search"
              value={searchTerm}
              onChange={handleSearchChange}
            />
            <button
              onClick={clearSearch}
              style={{
                width: 70,
                height: 30,
                border: "1px solid black",
                backgroundColor: "ivory",
                paddingLeft: 4,
                paddingRight: 4,
                color: "black",
              }}
            >
              Clear
            </button>
          </div>
        </div>
        {/* === Tabulator === */}
        <div
          style={{
            width: 450,
            height: 200,
            overflow: "scroll",
            overflowX: "hidden",
          }}
        >
          {filteredDataByCategory.length > 0 ? (
            <ReactTabulator
              ref={tableRef}
              data={filteredDataByCategory}
              columns={columns}
              options={options}
              layout={"fitData"}
            />
          ) : (
            <div style={{ textAlign: "center" }}>
              <ReactTabulator
                ref={tableRef}
                data={[]}
                columns={columns}
                options={noDataOption}
                layout={"fitData"}
              />
            </div>
          )}
        </div>
        <div>
          {/* === 확인/취소 버튼 === */}
          <button
            style={{
              backgroundColor: "lightGrey",
              borderRadius: 10,
              width: 60,
            }}
            onClick={handleConfirm}
          >
            Confirm
          </button>
          <button
            style={{
              backgroundColor: "lightGrey",
              borderRadius: 10,
              width: 60,
            }}
            onClick={handleCancelClick}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopicGrid;
