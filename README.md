# Comment Project

This project is a simple comment system that allows users to view, add, edit, and delete comments. It consists of a Django backend and a React frontend.

## Prerequisites

Before running the project, make sure you have the following installed:

- Python 
- Node.js
- PostgreSQL

## Backend Setup

1. Clone the repository:
```
git clone https://github.com/gchoi5738/comments
```

2. Navigate to the backend directory:

```
cd comment_project
```

3. Create a virtual environment:
```
python -m venv env
```

4. Activate the virtual environment:
- For Windows:
  ```
  env\Scripts\activate
  ```
- For macOS and Linux:
  ```
  source env/bin/activate
  ```

5. Install the backend dependencies:
```
pip install -r requirements.txt
```

6. Set up the PostgreSQL database:
- Create a new database named `comments`.
- Update the database configuration in `comment_project/settings.py` if necessary.
- Default user and password are 'db' in the settings. Port is on 5432. Change ANY of these depending on how you created the database and user. 
- Commands should look something like this(with database name as comments, user and password as db):
```
sudo -u postgres psql
postgres=# CREATE DATABASE comments;
postgres=# CREATE USER db WITH PASSWORD 'db';
postgres=# GRANT ALL PRIVILEGES ON DATABASE comments TO db;
```

7. Apply the database migrations:
```
python manage.py migrate
```
8. Load the fixture data (optional):
- Run the following command to load the fixture data:
  ```
  python manage.py loaddata comments.json
  ```

9. Start the Django development server:
```
python manage.py runserver
```

The backend server will run at `http://localhost:8000/`.

## Frontend Setup

1. Navigate to the frontend directory:

```
cd comment-frontend
```

2. Install the frontend dependencies:
```
npm install
```

3. Create a `.env` file in the frontend directory and add the following line:
```
REACT_APP_API_URL=http://localhost:8000
```

This sets the URL of the backend API. Change if you modified where the backend server is running.

4. Start the React development server:
```
npm start
```

The frontend server will run at `http://localhost:3000/`.

## Usage

1. Open a web browser and visit `http://localhost:3000/` to access the comment system.

2. The homepage will display a list of existing comments.

3. To add a new comment, enter the comment text in the input field and click the "Add Comment" button.

4. To edit a comment, click the "Edit" button next to the comment, make the necessary changes, and click "Save".

5. To delete a comment, click the "Delete" button next to the comment.

Please note: Application is currently sessionless so all new comments will be by admin.
## Configuration

- The backend settings can be modified in the `comment_project/settings.py` file.
- The frontend configuration can be modified in the `.env` file in the `comment-frontend` directory.

## Notes

- The project uses CORS (Cross-Origin Resource Sharing) to allow requests from the frontend to the backend. The `CORS_ORIGIN_WHITELIST` setting in `comment_project/settings.py` is set to `['http://localhost:3000']` to allow requests from the frontend running at `http://localhost:3000/`.

- The project assumes that an admin user will be able to edit and delete any comment. This can be customized based on your specific requirements.

- The project doesn't include user authentication or authorization. If needed, you can extend the project to include these features.

## Troubleshooting

- If you encounter any issues during setup or running the project, please refer to the document