/*
 * @flow
 */

import { newRequestSequence } from 'redux-reqseq';
import type { RequestSequence } from 'redux-reqseq';

const ADD_AUTO_APPROVED_DOMAIN :'ADD_AUTO_APPROVED_DOMAIN' = 'ADD_AUTO_APPROVED_DOMAIN';
const addAutoApprovedDomain :RequestSequence = newRequestSequence(ADD_AUTO_APPROVED_DOMAIN);

const ADD_MEMBER_TO_ORGANIZATION :'ADD_MEMBER_TO_ORGANIZATION' = 'ADD_MEMBER_TO_ORGANIZATION';
const addMemberToOrganization :RequestSequence = newRequestSequence(ADD_MEMBER_TO_ORGANIZATION);

const CREATE_ROLE :'CREATE_ROLE' = 'CREATE_ROLE';
const createRole :RequestSequence = newRequestSequence(CREATE_ROLE);

const DELETE_ROLE :'DELETE_ROLE' = 'DELETE_ROLE';
const deleteRole :RequestSequence = newRequestSequence(DELETE_ROLE);

const GET_ALL_ORGANIZATIONS :'GET_ALL_ORGANIZATIONS' = 'GET_ALL_ORGANIZATIONS';
const getAllOrganizations :RequestSequence = newRequestSequence(GET_ALL_ORGANIZATIONS);

const GET_ORGANIZATION :'GET_ORGANIZATION' = 'GET_ORGANIZATION';
const getOrganization :RequestSequence = newRequestSequence(GET_ORGANIZATION);

const GET_ORGANIZATION_MEMBERS :'GET_ORGANIZATION_MEMBERS' = 'GET_ORGANIZATION_MEMBERS';
const getOrganizationMembers :RequestSequence = newRequestSequence(GET_ORGANIZATION_MEMBERS);

const REMOVE_AUTO_APPROVED_DOMAIN :'REMOVE_AUTO_APPROVED_DOMAIN' = 'REMOVE_AUTO_APPROVED_DOMAIN';
const removeAutoApprovedDomain :RequestSequence = newRequestSequence(REMOVE_AUTO_APPROVED_DOMAIN);

const REMOVE_MEMBER_FROM_ORGANIZATION :'REMOVE_MEMBER_FROM_ORGANIZATION' = 'REMOVE_MEMBER_FROM_ORGANIZATION';
const removeMemberFromOrganization :RequestSequence = newRequestSequence(REMOVE_MEMBER_FROM_ORGANIZATION);

export {
  ADD_AUTO_APPROVED_DOMAIN,
  ADD_MEMBER_TO_ORGANIZATION,
  CREATE_ROLE,
  DELETE_ROLE,
  GET_ALL_ORGANIZATIONS,
  GET_ORGANIZATION,
  GET_ORGANIZATION_MEMBERS,
  REMOVE_AUTO_APPROVED_DOMAIN,
  REMOVE_MEMBER_FROM_ORGANIZATION,
  addAutoApprovedDomain,
  addMemberToOrganization,
  createRole,
  deleteRole,
  getAllOrganizations,
  getOrganization,
  getOrganizationMembers,
  removeAutoApprovedDomain,
  removeMemberFromOrganization,
};
