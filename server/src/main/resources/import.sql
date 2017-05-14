INSERT INTO user (id, username, password, firstname, lastname, created_at, updated_at, deleted_at) VALUES (1, 'user', '123', 'Fan', 'Jin', null, null, null);
INSERT INTO user (id, username, password, firstname, lastname, created_at, updated_at, deleted_at) VALUES (2, 'admin', '123', 'Jing', 'Xiao', null, null, null);

INSERT INTO authority (id, name, created_at, updated_at) VALUES (1, 'ROLE_USER', null, null);
INSERT INTO authority (id, name, created_at, updated_at) VALUES (2, 'ROLE_ADMIN', null, null);

INSERT INTO user_authority (user_id, authority_id) VALUES (1, 1);
INSERT INTO user_authority (user_id, authority_id) VALUES (2, 1);
INSERT INTO user_authority (user_id, authority_id) VALUES (2, 2);
