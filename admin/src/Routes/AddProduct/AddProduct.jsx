import React, { useEffect, useState } from "react";
import styles from "./AddProduct.module.css";

import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { db, storage } from "../../firebase";
import { getDoc } from "firebase/firestore";

import { BiCloudUpload } from "react-icons/bi";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { useParams } from "react-router-dom";

const AddProduct = () => {
  const [option, setOption] = useState();
  const [data, setData] = useState({});
  const [file, setFile] = useState();
  const [isLoading, setLoading] = useState(true);

  const params = useParams().id;
  console.log(params);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("cred"));
    if(user === null) {
      window.location.href = "/login";
    }
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const docRef = doc(db, "products", params);
      const docSnap = await getDoc(docRef);
      setData(docSnap.data());
    };
    params && fetchData();

    const fileUpload = () => {
      const name = new Date().getTime() + file.name;
      const storageRef = ref(storage, name);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
          }
        },
        (error) => {
          console.log(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setData((prev) => ({ ...prev, img: downloadURL }));
            setLoading(false);
          });
        }
      );
    };
    file && fileUpload();
  }, [file, params]);

  const inputHandler = (event) => {
    const id = event.target.id;
    if (id === "category") {
      setOption(event.target.value);
    }
    const value = event.target.value;
    setData({ ...data, [id]: value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    const id = params ? params : "id" + new Date().getTime();
    await setDoc(doc(db, "products", id), {
      id: id,
      ...data,
      timeStamp: serverTimestamp(),
    });
  };

  return (
    <div className={styles.Wrapper}>
      <div className={styles.header}>Add a product</div>
      <div className={styles.container}>
        <form onSubmit={submitHandler}>
          <div className={styles.uploadField}>
            <label htmlFor="upload">
              {file ? (
                <img
                  className={styles.fileImg}
                  src={URL.createObjectURL(file)}
                  alt=""
                />
              ) : (
                <BiCloudUpload className={styles.icon} />
              )}
            </label>
            <input
              type="file"
              id="upload"
              name="file"
              onChange={(event) => setFile(event.target.files[0])}
              style={{ display: "none" }}
            />
            <h3>Upload a Product Image</h3>
          </div>
          <div className={styles.inputFields}>
            <div className={styles.inputField}>
              <input
                type="text"
                required={true}
                defaultValue={data?.Productname}
                id="Productname"
                name="productname"
                placeholder="Product Name"
                onChange={inputHandler}
              />
            </div>
            <div className={styles.inputField}>
              <input
                type="text"
                id="price"
                required
                name="price"
                defaultValue={data?.price}
                placeholder="Price /Kg or Litre or Quantity"
                onChange={inputHandler}
              />
            </div>
            <div className={styles.inputField}>
              <select
                defaultValue={data?.category}
                name="select"
                id="category"
                required
                onChange={inputHandler}
              >
                <option value="default">Select a Category</option>
                <option value="fruits">Fruits</option>
                <option value="snacks">Snacks</option>
                <option value="vegetables">Vegatables</option>
                <option value="cleaning">Cleaning</option>
                <option value="drinks">Drinks</option>
                <option value="condiments">Condiments</option>
                <option value="beverages">Beverages</option>
                <option value="dairy">Dairy</option>
                <option value="petsaccessories">Pets Accessories</option>
                <option value="riceandpasta">Rice and Pasta</option>
                <option value="paperaccessories">Paper Accessories</option>
                <option value="miscitems">Misc Items</option>
                <option value="babyaccessories">Baby Accessories</option>
                <option value="poojaneeds">Pooja Needs</option>
                <option value="masalas">Masalas</option>
                <option value="oils">Oils</option>
                <option value="utensils">Utensils</option>
              </select>
            </div>
            <div className={styles.submitBtn}>
              <button>Submit</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
