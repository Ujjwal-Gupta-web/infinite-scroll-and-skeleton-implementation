export const get_users = async () => {
    const res = await fetch("https://randomuser.me/api/?page=1&results=10", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const ans = await res.json();
    return ans.results;
};

export const get_users_by_page = async (page) => {
    const res = await fetch(`https://randomuser.me/api/?page=${page}&results=5`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const ans = await res.json();
    return ans.results;
};