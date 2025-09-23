export const villaQuery = `*[_type == "villa"][0]{
  title, subtitle, description, heroImage, usp, equipments
}`;

export const activitiesQuery = `*[_type == "activity"] | order(title asc)[0...6]{
  _id, title, category, distance, excerpt, image, link
}`;

export const galleryQuery = `*[_type == "galleryImage"] | order(_createdAt desc)[0...6]{
  image
}`;
