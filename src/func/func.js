import axios from "axios";

export const fetchData = () => async (dispatch) => {
  try {
    dispatch({ type: "DATA_REQUEST" });

    const { data } = await axios.get(
      "https://api.quicksell.co/v1/internal/frontend-assignment/"
    );

    dispatch({ type: "DATA_SUCCESS", payload: data });
  } catch (error) {
    dispatch({ type: "DATA_FAILURE" });
  }
};

export const selectData =
  (group, allTickets, orderValue) => async (dispatch) => {
    try {
      dispatch({ type: "SELECT_DATA_REQUEST" });

      let user = false;
      let mySet = new Set();
      let arr = [],
        selectedData = [];

      console.log(allTickets, group, orderValue);

      if (group === "status") {
        allTickets.forEach((elem) => {
          // console.log("element is", elem);
          mySet.add([elem.status, elem.name]);
        });

        arr = [...mySet];

        arr.forEach((ii, index) => {
          let elem = ii[0],
            name = ii[1];
          let arr = allTickets.filter((fElem) => {
            return elem === fElem.status;
          });
          selectedData.push({
            [index]: {
              title: elem,
              value: arr,
              name: name,
            },
          });
        });
      } else if (group === "user") {
        user = true;
        allTickets?.allUser?.forEach((elem, index) => {
          // console.log("name is", elem.name);
          arr = allTickets?.allTickets?.filter((Felem) => {
            return elem.id === Felem.userId;
          });

          selectedData.push({
            [index]: {
              title: elem.name,
              value: arr,
            },
          });
        });
      } else {
        let prior_list = ["No priority", "Low", "Medium", "High", "Urgent"];

        prior_list.forEach((elem, index) => {
          arr = allTickets.filter((fElem) => {
            return index === fElem.priority;
          });

          selectedData.push({
            [index]: {
              title: elem,
              value: arr,
            },
          });
        });
      }

      // console.log("data is", selectedData);

      if (orderValue === "title") {
        selectedData.forEach((elem, index) => {
          elem[index]?.value?.sort((a, b) => a.title.localeCompare(b.title));
        });
      }

      if (orderValue === "priority") {
        selectedData.forEach((elem, index) => {
          elem[index]?.value?.sort((a, b) => b.priority - a.priority);
        });
      }

      dispatch({
        type: "SELECT_DATA_SUCCESS",
        payload: { selectedData, user },
      });
    } catch (error) {
      dispatch({ type: "SELECT_DATA_FAILURE", payload: error.message });
    }
  };
