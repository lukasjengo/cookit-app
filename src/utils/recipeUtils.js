// Normalize SLUG title
export const normalizeTitle = title => {
  let slug = title.toLowerCase().replace(/[^a-zA-Z ]/g, '');
  slug = slug.split(' ').join('-');
  return slug;
};
