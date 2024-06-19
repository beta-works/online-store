export const formatCurrency = (value) => {
    return value.toFixed(2);
  };
  
  export const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString();
  };
  