import http from "../http-common";

class TutorialDataService {
  getAll() {
    return http.get("/MyNote");
  }

  get(id) {
    return http.get(`/MyNote/${id}`);
  }

  create(data) {
    return http.post("/MyNote/add", data);
  }

  update(id, data) {
    return http.put(`/MyNote/update`, data);
  }

  delete(id) {
    return http.delete(`/MyNote/${id}`);
  }

  deleteAll() {
    return http.delete(`/MyNote`);
  }

  findByTitle(title) {
    return http.get(`/MyNote?title=${title}`);
  }
}

export default new TutorialDataService();