
# Towerbuddy backend 2.0 Local Setup

[WSL (ubuntu 20.04)/ any debian flavour of linux]


## Setting up environment

**Project Pre-requisites:** 

&nbsp;1. Supporting libraries (Linux)

``` 
sudo apt-get install -y git python3-venv python3-pip libproj-dev proj-data libgeos-dev libgdal-dev gdal-bin 

```
&nbsp;2. Postgres installation

* Install Postgres and PGadmin.

    &nbsp;   [Click here - How to install PostgreSQL on Ubuntu WSL](https://www.youtube.com/watch?v=uq-QtZ5OdRM)

  ⚠️ Tip: Remember the password you are setting, by default it will be 'postgres'

* Setting up Project
 
  &nbsp;   **Step 1:** Clone repository
  ```
  git clone https://github.com/i4sight-source/realestate-api.git
  ```

  &nbsp;   **Step 2:** Navigate to the project folder
  ```
  cd realestate-api/v1/
  ```
  &nbsp;   **Step 3:** Switch to main branch
  ```
  git checkout master-tb-2
  ```
  &nbsp;   **Step 4:** Install Dependencies

  &nbsp; Run the following commands :  
  
  ```
    # Create a virtual environment named `.venv` in the current directory 
    python3 -m venv .venv

    # Activate the virtual environment (for macOS/Linux)
    source .venv/bin/activate
 
    # Install all dependencies listed in `new_requirements.txt` using pip
    pip3 install -r new_requirements.txt
   ```

    > ⚠️ **Potential Issue: psycopg2 Installation**
    >  
    > If you encounter issues related to `psycopg2`, try the following:
    >  
    > ```bash
    > pip install psycopg2-binary
    > ```
    >  
    > After installing, try installing the requirements again:
    >  
    > ```bash
    > pip install -r requirements.txt
    > ```

## Database Setup

&nbsp; **1. Check PostgreSQL Service**

  &nbsp;   Make sure PostgreSQL is running. If it’s not running, pgAdmin won’t be able to connect.
 
  &nbsp; On Linux/macOS: Run - 
  ```
  sudo systemctl status postgresql
  ```
  &nbsp; If it's inactive: Run - 
  ```
  sudo systemctl start postgresql
  ```
  ![Screenshot](images/db_create.png) 
  










