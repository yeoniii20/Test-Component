import React, { useEffect, useState } from "react";

interface TableDataItem {
  id: number;
  server: string;
}

const initialData: TableDataItem[] = [
  { id: 1, server: "EMS1" },
  { id: 2, server: "EMS2" },
  { id: 3, server: "EMS3" },
  { id: 4, server: "EMS4" },
  { id: 5, server: "EMS5" },
  { id: 6, server: "EMS6" },
  { id: 7, server: "EMS7" },
];

const GridDropdown = () => {
  const [selectedData, setSelectedData] = useState<TableDataItem[]>([]);
  const [selectAll, setSelectAll] = useState(false);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [dropdownMenu, setDropdownMenu] = useState<boolean>(false);

  const selectedServerNames = selectedData.map((option) => option.server);

  const handleCheckboxChange = (item: TableDataItem) => {
    const isChecked = selectedData.some(
      (selectedItem) => selectedItem.id === item.id
    );
    if (isChecked) {
      setSelectedData((prevSelectedData) =>
        prevSelectedData.filter((selectedItem) => selectedItem.id !== item.id)
      );
      setSelectAll(false);
    } else {
      setSelectedData((prevSelectedData) => [...prevSelectedData, item]);
      if (selectedData.length + 1 === initialData.length) {
        setSelectAll(true);
      }
    }
  };

  const handleSelectAllChange = () => {
    const newSelectAll = !selectAll;
    setSelectAll(newSelectAll);
    setSelectedData(newSelectAll ? initialData : []);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const filteredData = searchTerm
    ? initialData.filter((item) =>
        item.server.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : initialData;

  const checkboxChecked = (item: TableDataItem) =>
    selectedData.some((selectedItem) => selectedItem.id === item.id);

  const clearSearch = () => {
    setSearchTerm("");
  };

  const dropdownText =
    selectedData.length > 0
      ? `${selectedServerNames[0]}외 ${selectedData.length - 1}건`
      : "EMS server를 선택하세요";

  const handleDropdownVisible = () => {
    setSelectedData([]);
    setSearchTerm("");
    setDropdownMenu(!dropdownMenu);
  };

  const handleCancelClick = () => {
    setSelectedData([]);
    setDropdownMenu(false);
  };

  const handleConfirm = () => {
    const selectedCount = selectedData.length;

    if (selectedCount > 0) {
      setSelectedData(selectedData);
      const selectedServerNames = selectedData.map(
        (item: TableDataItem) => item.server
      );
      alert(
        `서버 ${selectedCount}건을 선택했습니다. 선택한 서버: ${selectedServerNames.join(
          ", "
        )}`
      );
    } else {
      setSelectedData([]);
      alert("No servers selected");
    }

    setDropdownMenu(false);

    console.log(selectedData);
  };

  return (
    <div>
      {/* 입력 창 */}
      <div
        onClick={handleDropdownVisible}
        style={{
          backgroundColor: "lightGrey",
          width: 255,
          height: 40,
          cursor: "pointer",
        }}
      >
        {dropdownText}
      </div>
      {dropdownMenu ? (
        <div>
          <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={handleSearchChange}
            className="p-2 mb-2 border"
            style={{ color: "black" }}
          />
          <button
            style={{ backgroundColor: "black", height: 41, width: 60 }}
            onClick={clearSearch}
          >
            Clear
          </button>
          <table className="w-full border-collapse">
            <thead>
              <tr style={{ backgroundColor: "grey" }}>
                <th className="w-2">
                  <input
                    type="checkbox"
                    checked={selectAll}
                    onChange={handleSelectAllChange}
                  />
                </th>
                <th
                  className="border-b"
                  colSpan={2}
                  style={{
                    color: "black",
                    paddingLeft: 10,
                    borderLeft: "2px solid black",
                    backgroundColor: "grey",
                  }}
                >
                  Server
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((item, index) => (
                <tr
                  key={item.id}
                  style={{
                    backgroundColor: index % 2 === 0 ? "lightGrey" : "grey",
                  }}
                >
                  <td className="text-center">
                    <input
                      type="checkbox"
                      checked={checkboxChecked(item)}
                      onChange={() => handleCheckboxChange(item)}
                    />
                  </td>
                  <td
                    className="border-b"
                    colSpan={2}
                    style={{
                      color: "black",
                      paddingLeft: 10,
                      borderLeft: "2px solid black",
                    }}
                  >
                    {item.server}
                  </td>
                </tr>
              ))}
            </tbody>
            <div style={{ display: "flex" }}>
              <button
                style={{
                  backgroundColor: "black",
                  height: 41,
                  width: 60,
                  borderRadius: 10,
                }}
                onClick={handleConfirm}
              >
                Confirm
              </button>
              <button
                style={{
                  backgroundColor: "black",
                  height: 41,
                  width: 60,
                  borderRadius: 10,
                }}
                onClick={handleCancelClick}
              >
                Cancel
              </button>
            </div>
            {selectedData.length > 0 && (
              <div className="mt-4">
                <h4 style={{ color: "black" }}>Selected Servers:</h4>
                <ul>
                  {selectedData.map((item) => (
                    <li key={item.id}>{item.server}</li>
                  ))}
                </ul>
              </div>
            )}
          </table>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default GridDropdown;
