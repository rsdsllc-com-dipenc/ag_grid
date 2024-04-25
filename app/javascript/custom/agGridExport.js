function export_to_csv(gridApi, tableName, gridColumnKeysToExport) {
  //console.log("In 'export_to_csv' function")

  gridApi.exportDataAsCsv({
    fileName: `${tableName}_${file_timestamp()}`,
    columnKeys: gridColumnKeysToExport,
  });
}

function export_to_xlsx(gridApi, tableName, gridColumnKeysToExport) {
  //console.log("In 'export_to_xlsx' function")

  gridApi.exportDataAsExcel({
    fileName: `${tableName}_${file_timestamp()}`,
    columnKeys: gridColumnKeysToExport,
  });
}
