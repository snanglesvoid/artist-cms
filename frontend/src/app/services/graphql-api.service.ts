import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { from } from 'rxjs';
import { map } from 'rxjs/operators'

const apiPrefix = '/admin/api'

function graphql(query: string, variables: any = {}) {
  return from(fetch('/admin/api', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      variables,
      query,
    }),
  }).then(function(result) {
    return result.json();
  }));
}

@Injectable({
  providedIn: 'root'
})
export class GraphqlApiService {

  constructor(
  ) { }

  getPage(slug: string) {
    const query = `
      query PageBySlug($slug: String!) {
        allPages(where: { slug: $slug }) {
          name
          slug
          id
          pictures {
            id
            title
            gridArea
          }
          galleries {
            id
            title
            gridArea
          }
          textblocks {
            id
            title
            gridArea
            content
          }
        }
      }
    `
    const variables = { slug }
    return graphql(query, variables).pipe(
      map(x => x.data.allPages[0])
    )
  }

  getTextblock(slug: string) {
    const query = `
      query TextBlockBySlug($slug: String!) {
        allTextBlocks(where: { slug: $slug }) {
          title
          slug
          id
          content
        }
      }
    `
    const variables = { slug }
    return graphql(query, variables).pipe(
      map(x => x.data.allTextBlocks[0])
    )
  }

  allPages() {
    const query = `
      query {
        allPages {
          name
          id
        }
        _allPagesMeta {
          count
        }
      }
    `
    return graphql(query)
  }

  allTextblocks() {
    const query = `
      query {
        allTextBlocks {
          title
          id
        }
        _allTextBlocksMeta {
          count
        }
      }
    `
    return graphql(query)
  }

  graphql(query, variables) {
    return graphql(query, variables)
  }
}
