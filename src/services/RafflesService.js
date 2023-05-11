import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';

// ======================================================================== ADMIN FUNCTIONS

// function formatCreatedAt(createdAt) {
//   const date = new Date(createdAt.toDate());
//   const day = date.getDate().toString().padStart(2, '0');
//   const month = (date.getMonth() + 1).toString().padStart(2, '0');
//   const year = date.getFullYear().toString().slice(-2);
//   const hours = date.getHours().toString().padStart(2, '0');
//   const minutes = date.getMinutes().toString().padStart(2, '0');

//   return `${day}/${month}/${year} às ${hours}:${minutes}`;
// }

// // Função para converter uma imagem em formato File para base64
// const convertImageToBase64 = (imageFile) => new Promise((resolve, reject) => {
//   const reader = new FileReader();
//   reader.readAsDataURL(imageFile);
//   reader.onload = () => {
//     resolve(reader.result);
//   };
//   reader.onerror = (error) => {
//     reject(error);
//   };
// });

// -------------------------------------------------------------- CONTROLL BLOG POST

// const blogDataRef = collection(db, 'blog');

// Referência para a coleção 'blog' do Firestore
// const blogDataRef = firebase.firestore().collection('blog');

// ------------------------ CREATE

// const createBlogPost = async (
//   postImageFile,
//   postTitle,
//   postContent,
//   postBloggerId,
// ) => {
//   // Converte a imagem para base64
//   const postImage = await convertImageToBase64(postImageFile);
//   // Salva os dados do post no Firestore
//   await addDoc(blogDataRef, {
//     postImage,
//     postTitle,
//     postContent,
//     postBloggerId,
//     postDate: Timestamp.now(),
//   });
// };

// ------------------------ READ

const getRafflesList = async () => {
  const rafflesRef = collection(db, 'rifas');
  const querySnapshot = await getDocs(rafflesRef);
  const raffles = [];
  querySnapshot.forEach((doc) => {
    raffles.push({
      id: doc.id,
      ...doc.data(),
    });
  });
  return raffles;
};

// // ------------------------ GET POST TO EDIT

// const getBlogEspecificPost = async (id) => {
//   const docRef = doc(db, 'blog', id);
//   const docSnap = await getDoc(docRef);

//   if (docSnap.exists()) {
//     return docSnap.data();
//   }

//   return null;
// };

// // ------------------------ EDIT

// const updateBlogPost = async (
//   id,
//   postImageFile,
//   postTitle,
//   postContent,
//   postBloggerId,
// ) => {
//   // Converte a imagem para base64
//   const postImage = await convertImageToBase64(postImageFile);

//   await updateDoc(doc(db, 'blog', id), {
//     postImage,
//     postTitle,
//     postContent,
//     postBloggerId,
//     postDate: Timestamp.now(),
//   });
// };

// // ------------------------ DELETE

// const deleteBlogPost = async (id) => {
//   await deleteDoc(doc(db, 'blog', id));
// };

// // -------------------------------------------------------------- CONTROLL MAILS LIST

// const mailsListDataRef = collection(db, 'emails');

// // ------------------------ READ

// const getMailsList = async () => {
//   const querySnapshot = await getDocs(mailsListDataRef);
//   const mails = [];
//   querySnapshot.forEach((doc) => {
//     mails.push({
//       id: doc.id,
//       ...doc.data(),
//     });
//   });
//   return mails;
// };

// // -------------------------------------------------------------- CONTROLL MESSAGES

// const contactsDataRef = collection(db, 'contacts');

// // ------------------------ READ

// const getContacts = async () => {
//   const querySnapshot = await getDocs(contactsDataRef);
//   const contacts = [];
//   querySnapshot.forEach((doc) => {
//     contacts.push({
//       id: doc.id,
//       ...doc.data(),
//     });
//   });
//   return contacts;
// };

// // -------------------------------------------------------------- CONTROLL TRENDING NEWS

// const trendingNewsDataRef = doc(db, 'trending', 'TrendingNews');

// // ------------------------ READ

// const getTrendingNews = async () => {
//   const docSnap = await getDoc(trendingNewsDataRef);

//   if (docSnap.exists()) {
//     return docSnap.data();
//   }
//   console.log('No such document!');
// };

// // ------------------------ EDIT

// const updateTrendingNews = async (
//   trendImageFile,
//   trendTitle,
//   trendTitleBold,
//   trendLegend,
//   trendAuthor,
// ) => {
//   // Converte a imagem para base64
//   const trendImage = await convertImageToBase64(trendImageFile);

//   await updateDoc(trendingNewsDataRef, {
//     trendImage,
//     trendTitle,
//     trendTitleBold,
//     trendLegend,
//     trendAuthor,
//     trendDate: Timestamp.now(),
//   });
// };

// // const verifyIfEmailAlreadyRegistered = async (coll, email) => {
// //   const q = query(collection(db, coll), where("email", "==", email));
// //   const querySnapshot = await getDocs(q);

// //   return querySnapshot.docs.length !== 0;
// // };

export {
  getRafflesList,
};
