module.exports = {
  format_date: (date) => {
    // Format date as MM/DD/YYYY
    return date.toLocaleDateString();
  },
  get_emoji: (review) => {
    // const review= Math.floor();

    // Return an emoji that matches the review
    if (review === 5) {
      return '🤩';
    } else if (review === 4) {  
      return '🙂';
    }else if (review === 3) {
      return '😐';
    }else if (review === 2) {
      return '☹️';
    } else {
      return '🤬';
    }
  },
};
