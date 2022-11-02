import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css'
export default function SignUp()
{
    return(
      <div className={styles.pages}>
      <form class="row g-4">
        <h2>Welcome!</h2>
      <div class="col-md-6">
        <label for="inputEmail4" class="form-label">Email</label>
        <input type="email" class="form-control" id="inputEmail4"/>
      </div>
      <div class="col-md-6">
        <label for="inputEmail4" class="form-label">Password</label>
        <input type="email" class="form-control" id="inputEmail4"/>
      </div>
      <div class="col- sm-2">
        <label for="inputAddress" class="form-label">Address</label>
        <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St"/>
      </div>
      <div class="col-sm-3">
        <label for="inputCity" class="form-label">City</label>
        <input type="text" class="form-control" id="inputCity"/>
      </div>
      <div class="col-sm-3">
        <label for="inputState" class="form-label">State</label>
        <select id="inputState" class="form-select">
          <option selected>Choose...</option>
          <option>...</option>
        </select>
      </div>
      <div class="col-sm-3">
        <label for="inputZip" class="form-label">Zip</label>
        <input type="text" class="form-control" id="inputZip"/>
      </div>
      <div class="col-12">
        <button type="submit" class="btn btn-primary">Sign up</button>
      </div>
      <Link legacyBehavior href="/"> 
        <a className="btn btn-success">Home</a>
        </Link>
    </form>
    </div>
    )
  }