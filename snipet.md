<!-- user-list.component.html -->

<div *ngFor="let user of users" class="user-form mat-elevation-z2">
  <h2>User Details</h2>
  <mat-form-field>
    <mat-label>Name</mat-label>
    <input matInput [value]="user.name" readonly />
  </mat-form-field>
  <mat-form-field>
    <mat-label>Email</mat-label>
    <input matInput [value]="user.email" readonly />
  </mat-form-field>
</div>
<div *ngIf="loading" class="loading-message">Loading...</div>
<div *ngIf="error" class="error-message">{{ error }}</div>

/_ user-list.component.scss _/

:host {
display: block;
max-width: 600px;
margin: auto;
}

.user-form {
margin-bottom: 20px;
padding: 15px;
border-radius: 4px;
}

.loading-message,
.error-message {
margin-top: 10px;
padding: 8px;
border: 1px solid #e74c3c;
border-radius: 4px;
background-color: #f2dede;
color: #a94442;
}

.loading-message {
color: #31708f;
background-color: #d9edf7;
border-color: #bce8f1;
}
